const TextField = ({
  label,
  type = "text",
  name,
  register,
  validationSchema = {},
  isRequired = false,
  errors,
  otherClasses = "",
  ...res
}) => {
  return (
    <div className="w-full space-y-2">
      <label className="text-secondary-500" htmlFor={name}>
        {label}
        {isRequired && <span className="text-red-600 mr-1">*</span>}
      </label>
      <input
        autoComplete="false"
        id={name}
        className={`w-full p-4 rounded-lg border border-secondary-300 bg-transparent focus:border-primary-600 focus:bg-secondary-0 focus:shadow-lg focus:shadow-primary-100 transition-all duration-300 ${
          errors[name]?.message
            ? "border-red-500  focus:border-red-500 focus:shadow-red-100"
            : ""
        } ${otherClasses}`}
        type={type}
        name={name}
        placeholder={label}
        {...register(name, validationSchema)}
        {...res}
      />
      <span className="inline-block text-sm text-red-500 pt-1 pr-4">
        {errors && errors[name] && errors[name].message}
      </span>
    </div>
  );
};

export default TextField;
