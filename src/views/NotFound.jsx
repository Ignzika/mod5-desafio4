import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className=" rpgui-container framed-golden-2 NotFound">
        <img
          src="data:image/png;base64,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"
          alt="pizza not found"
        />
      </div>
    </>
  );
};

export default NotFound;
