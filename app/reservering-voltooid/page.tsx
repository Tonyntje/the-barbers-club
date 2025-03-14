"use client";

import {fetchDataUserData} from "@/app/api/services/fetchDataUserData";
import {Box, Column, Heading, Section} from "@/app/components";
import {useSearchParams} from "next/navigation";
import type {DataType} from "@/app/api/booking/route";
import {useEffect, useState} from "react";

export default function Page() {
	const searchParams = useSearchParams();
	const orderNumber = searchParams.get("ordernummer");
	const [userData, setUserData] = useState<DataType | undefined>();

	useEffect(() => {
		orderNumber &&
			fetchDataUserData(orderNumber).then((results) => {
				setUserData(results);
			});
	}, [orderNumber]);

	if (!userData) return null;

	return (
		<Section spacing={16}>
			<Column cols={2}>
				<div className="flex items-center">
					<Heading level={1}>Bedankt voor je reservering!</Heading>
				</div>
				<div id="emitter" />
				<Box>
					<p>
						<strong>Uw ordernummer</strong> {userData.id}
					</p>
					<p>
						<strong>Uw naam</strong> {userData.name}
					</p>
					<p>
						<strong>Uw telefoon nummer</strong> {userData.phone}
					</p>
					<p>
						<strong>Uw gekozen dienst</strong> {userData.service}
					</p>
				</Box>
			</Column>
		</Section>
	);
}
