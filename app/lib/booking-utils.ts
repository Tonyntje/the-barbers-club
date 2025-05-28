import { format, addMinutes, parse, isBefore, isAfter, isSameDay } from 'date-fns';
import { nl } from 'date-fns/locale';
import { Service, TimeRange, TimeSlot, DayAvailability } from './types';
import { shopTimes, WEEKDAYS, TIME_INTERVAL } from './constants';

// Format time string (e.g., "09:15")
export const formatTimeString = (date: Date): string => {
  return format(date, 'HH:mm');
};

// Parse time string to Date object
export const parseTimeString = (timeString: string, date: Date): Date => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const newDate = new Date(date);
  newDate.setHours(hours, minutes, 0, 0);
  return newDate;
};

// Calculate end time based on start time and service length
export const calculateEndTime = (startTime: Date, serviceLength: number): Date => {
  return addMinutes(startTime, serviceLength);
};

// Check if shop is open on a specific day
export const isShopOpenOnDay = (date: Date): boolean => {
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const daySchedule = shopTimes[dayOfWeek];
  
  return typeof daySchedule.time !== 'string';
};

// Get shop hours for a specific day
export const getShopHoursForDay = (date: Date): TimeRange | null => {
  const dayOfWeek = date.getDay();
  const daySchedule = shopTimes[dayOfWeek];
  
  if (typeof daySchedule.time === 'string') {
    return null; // Shop is closed
  }
  
  return daySchedule.time as TimeRange;
};

// Generate time slots for a specific day based on shop hours and service length
export const generateTimeSlotsForDay = (date: Date, serviceLength: number): TimeSlot[] => {
  const shopHours = getShopHoursForDay(date);
  if (!shopHours) return []; // Shop is closed
  
  const slots: TimeSlot[] = [];
  const startHour = shopHours.from;
  const endHour = shopHours.to;
  
  // Generate slots with TIME_INTERVAL minutes increment
  let currentTime = new Date(date);
  currentTime.setHours(startHour, 0, 0, 0);
  
  const endTime = new Date(date);
  endTime.setHours(endHour, 0, 0, 0);
  
  // Adjust end time to account for service length
  const lastPossibleStartTime = addMinutes(endTime, -serviceLength);
  
  while (isBefore(currentTime, lastPossibleStartTime) || isSameDay(currentTime, lastPossibleStartTime)) {
    slots.push({
      time: formatTimeString(currentTime),
      available: true // Default to available, will be updated with actual availability
    });
    
    currentTime = addMinutes(currentTime, TIME_INTERVAL);
  }
  
  return slots;
};

// Format date for display
export const formatDateForDisplay = (date: Date): string => {
  return format(date, 'EEEE d MMMM', { locale: nl });
};

// Get service details by value
export const getServiceDetails = (serviceValue: string, services: Service[]): Service | null => {
  return services.find(service => service.value === serviceValue) || null;
};

// Check if a time slot conflicts with a booked appointment
export const isTimeSlotConflicting = (
  date: Date, 
  timeSlot: string, 
  serviceLength: number, 
  bookedAppointments: { date: Date, startTime: string, endTime: string }[]
): boolean => {
  const startTime = parseTimeString(timeSlot, date);
  const endTime = calculateEndTime(startTime, serviceLength);
  
  return bookedAppointments.some(appointment => {
    if (!isSameDay(date, appointment.date)) return false;
    
    const appointmentStart = parseTimeString(appointment.startTime, appointment.date);
    const appointmentEnd = parseTimeString(appointment.endTime, appointment.date);
    
    // Check if there's an overlap
    return (
      (isBefore(startTime, appointmentEnd) && isAfter(endTime, appointmentStart)) ||
      (isSameDay(startTime, appointmentStart) && isSameDay(endTime, appointmentEnd))
    );
  });
};

// Mock function to fetch booked appointments from Google Calendar
// In a real implementation, this would call an API to get actual bookings
export const fetchBookedAppointments = async (startDate: Date, endDate: Date): Promise<{ date: Date, startTime: string, endTime: string }[]> => {
  // This is a placeholder. In a real app, you would integrate with Google Calendar API
  return Promise.resolve([]);
};

// Generate availability for multiple days
export const generateAvailabilityForDateRange = async (
  startDate: Date, 
  numberOfDays: number, 
  serviceLength: number
): Promise<DayAvailability[]> => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + numberOfDays);
  
  // Fetch booked appointments from "database" or Google Calendar
  const bookedAppointments = await fetchBookedAppointments(startDate, endDate);
  
  const availability: DayAvailability[] = [];
  
  for (let i = 0; i < numberOfDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    
    if (!isShopOpenOnDay(currentDate)) continue;
    
    const timeSlots = generateTimeSlotsForDay(currentDate, serviceLength);
    
    // Update availability based on booked appointments
    timeSlots.forEach(slot => {
      slot.available = !isTimeSlotConflicting(
        currentDate, 
        slot.time, 
        serviceLength, 
        bookedAppointments
      );
    });
    
    availability.push({
      date: currentDate,
      slots: timeSlots
    });
  }
  
  return availability;
};