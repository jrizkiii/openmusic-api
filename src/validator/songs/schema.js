const Joi = require('joi');

const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  // menambahkan fungsi integer(), min() dan max() untuk memberikan maksimal number yang ditetapkan pada nilai tahun
  year: Joi.number().integer().min(1900).max(2021)
    .required(),
  performer: Joi.string().required(),
  genre: Joi.string(),
  duration: Joi.number(),
});

module.exports = { SongPayloadSchema };
