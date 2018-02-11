import Boom from 'boom';
import dateformat from 'dateformat';
import env from './env.config';
import r from './db/config';
import {
  ReplyPromiseResponse
} from './decorators';

class Handlers {
  @ReplyPromiseResponse
  static async getAllHashtags() {
    return r.table(env.DB_TABLE_NAME);
  }

  @ReplyPromiseResponse
  static async getHashtag(request) {
    const { hashtagId } = request.params;
    return r.table(env.DB_TABLE_NAME).get(hashtagId);
  }

  @ReplyPromiseResponse
  static async createHashtag(request) {
    const { payload } = request;
    return r.table(env.DB_TABLE_NAME).insert(
      r.expr(payload).merge({
        createdAt: r.now()
      }),
      // This tells rethinkdb that changes should be return
      {returnChanges: true}
    )
  }

  @ReplyPromiseResponse
  static async putHashtag(request) {
    const { hashtagId } = request.params;
    const { payload } = request;
    payload.id = hashtagId;
    return r.table(env.DB_TABLE_NAME)
      .get(hashtagId)
      .replace(payload, {returnChanges: true})
  }

  @ReplyPromiseResponse
  static async patchHashtag(request) {
    const { hashtagId } = request.params;
    const { payload } = request;
    payload.id = hashtagId;
    return r.table(env.DB_TABLE_NAME)
    .get(hashtagId)
    .update(payload, {returnChanges: true})
  }

  @ReplyPromiseResponse
  static async deleteHashtag(request) {
    const { hashtagId } = request.params;
    return r.table(env.DB_TABLE_NAME)
      .get(hashtagId)
      .delete({returnChanges: true})
  }
}

export default Handlers;
