const GenderCheckBox = () => {
  return (
    <div className="flex mt-3">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-pink-500"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
