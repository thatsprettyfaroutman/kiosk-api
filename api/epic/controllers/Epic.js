'use strict';

/**
 * Epic.js controller
 *
 * @description: A set of functions called "actions" for managing `Epic`.
 */

module.exports = {

  /**
   * Retrieve epic records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.epic.search(ctx.query);
    } else {
      return strapi.services.epic.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a epic record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.epic.fetch(ctx.params);
  },

  /**
   * Count epic records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.epic.count(ctx.query);
  },

  /**
   * Create a/an epic record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.epic.add(ctx.request.body);
  },

  /**
   * Update a/an epic record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.epic.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an epic record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.epic.remove(ctx.params);
  },

  /**
   * Add relation to a/an epic record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.epic.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an epic record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.epic.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an epic record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.epic.removeRelation(ctx.params, ctx.request.body);
  }
};
