import classNames from "classnames";

export const BookingStatus = ({ status }: { readonly status: number }) => {
  return (
    <div className="bg-neutral-200 p-0.5 rounded-lg mb-4">
      <div className="grid w-full grid-cols-3 gap-1 text-sm">
        <div
          className={classNames(
            "bg-neutral-100 text-center border-2 font-medium rounded-lg py-1 px-3",
            {
              "bg-primary-100 text-primary-700 border-primary-700":
                status === 1,
            },
          )}
        >
          Informatie
        </div>
        <div
          className={classNames(
            "bg-neutral-100 text-center border-2 font-medium rounded-lg py-1 px-3",
            {
              "bg-primary-100 text-primary-700 border-primary-700":
                status === 2,
            },
          )}
        >
          Datum & tijd
        </div>
        <div
          className={classNames(
            "bg-neutral-100 text-center border-2 font-medium rounded-lg py-1 px-3",
            {
              "bg-primary-100 text-primary-700 border-primary-700":
                status === 3,
            },
          )}
        >
          Betalen
        </div>
      </div>
    </div>
  );
};
