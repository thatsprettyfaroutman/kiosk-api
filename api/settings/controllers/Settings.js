'use strict';

/**
 * Settings.js controller
 *
 * @description: A set of functions called "actions" for managing `Settings`.
 */

module.exports = {

  /**
   * Retrieve settings records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.settings.search(ctx.query);
    } else {
      return strapi.services.settings.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a settings record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.settings.fetch(ctx.params);
  },

  /**
   * Count settings records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.settings.count(ctx.query);
  },

  /**
   * Create a/an settings record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.settings.add(ctx.request.body);
  },

  /**
   * Update a/an settings record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.settings.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an settings record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.settings.remove(ctx.params);
  },

  /**
   * Add relation to a/an settings record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.settings.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an settings record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.settings.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an settings record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.settings.removeRelation(ctx.params, ctx.request.body);
  }
};
