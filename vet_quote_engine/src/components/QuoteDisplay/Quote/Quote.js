const Quote = () => {
  {/* Add admin validation to conditionally return a quote with "delete" and "update status" buttons (drop down?)*/}

  return (
    // Change this to paper or card
    <div>
      <h4>Veteran Detail Quote</h4>
      <p>List of services Here</p>
      <p>Subtotal: </p>
      <p>   + tax:</p>
      <p>    TOTAL: </p>
      {/* Map through selectedServices (id) where id = quoteId
            <p>{`${service.name} - ${service.price}`}</p> */}
      {/* Consider putting some kind of subtotal, tax, and total here */}
    </div>
  );
};

export default Quote;
