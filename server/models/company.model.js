module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      info: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const company = mongoose.model("company", schema);
  return company;
};
