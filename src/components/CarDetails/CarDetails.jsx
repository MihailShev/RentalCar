import css from "./CarDetails.module.css";

export default function CarDetails({ car }) {
  if (!car) return null;

  const {
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    type,
    description,
    functionalities,
    rentalConditions,
    mileage,
    fuelConsumption,
    engineSize,
    accessories,
    id,
  } = car;

  return (
    <div className={css.wrapper}>
      <div className={css.wrap_img_form}>
        <img className={css.img} src={img} alt={`Photo ${brand} ${model}`} />

        <form className={css.form}>
          <h4 className={css.formTitle}>Book your car now</h4>
          <p className={css.formSubtitle}>
            Stay connected! We are always ready to help you.
          </p>

          <input className={css.input} type="text" placeholder="Name*" />
          <input className={css.input} type="email" placeholder="Email*" />
          <input className={css.input} type="date" />
          <textarea className={css.textarea} placeholder="Comment"></textarea>

          <button type="submit" className={css.button}>
            Send
          </button>
        </form>
      </div>

      <div className={css.rightColumn}>
        <h2 className={css.title}>
          {brand} {model}, {year}
        </h2>

        <p className={css.address}>
          <svg height={15} width={12}>
            <use href="/svg/icons.svg#icon-location" />
          </svg>
          {address} &nbsp; <b>Mileage:</b> {mileage.toLocaleString("uk-UA")} km
          &nbsp; <b>Id:</b> {id}
        </p>

        <span className={css.price}>${rentalPrice}</span>

        <p className={css.description}>{description}</p>

        <div className={css.section}>
          <h4>Rental Conditions:</h4>
          <ul className={css.list}>
            {rentalConditions.map((condition, idx) => (
              <li key={idx}>
                <svg height={16} width={16}>
                  <use href="/svg/icons.svg#icon-check-circle" />
                </svg>
                {condition}
              </li>
            ))}
          </ul>
        </div>

        <div className={css.section}>
          <h4>Car Specifications:</h4>
          <ul className={css.list}>
            <li>
              <svg height={16} width={16}>
                <use href="/svg/icons.svg#icon-calendar" />
              </svg>
              Year: {year}
            </li>
            <li>
              <svg height={16} width={16}>
                <use href="/svg/icons.svg#icon-car" />
              </svg>
              Type: {type}
            </li>
            <li>
              <svg height={16} width={16}>
                <use href="/svg/icons.svg#icon-fuel-pump" />
              </svg>
              Fuel Consumption: {fuelConsumption}
            </li>
            <li>
              <svg height={16} width={16}>
                <use href="/svg/icons.svg#icon-gear" />
              </svg>
              Engine Size: {engineSize}
            </li>
          </ul>
        </div>

        <div className={css.section}>
          <h4>Accessories and functionalities:</h4>
          <ul className={css.list}>
            {[...accessories, ...functionalities].map((item, idx) => (
              <li key={idx}>
                <svg height={16} width={16}>
                  <use href="/svg/icons.svg#icon-check-circle" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
