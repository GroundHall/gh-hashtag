/**
 * This file handles the model/models for
 * the perticular microservice
 */

import Joi from 'joi';

export const HashtagModel = Joi.object({
  name: Joi.string()
}).required();

export const HashtagModelRequired = Joi.object({
  name: Joi.string().required()
}).required();
