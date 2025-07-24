import { Formik, Form, Field } from "formik";
import css from "./CatalogFilter.module.css";

export default function CatalogFilter({ filters, brands, onSubmit }) {
  const initialValues = filters || {
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Form className={css.form}>
        <p>Car brand</p>
        <Field name="brand" as="select">
          <option value="">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </Field>

        <p>Price/ 1 hour</p>
        <Field name="price" as="select">
          <option value="">Choose a price</option>
          <option value="30">30$</option>
          <option value="40">40$</option>
          <option value="50">50$</option>
          <option value="60">60$</option>
          <option value="70">70$</option>
          <option value="80">80$</option>
        </Field>

        <p>Сar mileage / km</p>
        <Field name="minMileage" type="text" placeholder="From" />
        <Field name="maxMileage" type="text" placeholder="To" />

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
