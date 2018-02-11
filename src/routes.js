import Handlers from './handlers';

import {
  HashtagModel,
  HashtagModelRequired
} from './db/model';


const routes = [
  {
    method: 'GET',
    path: '/hashtags',
    handler: Handlers.getAllHashtags
  },
  {
    method: 'GET',
    path: '/hashtags/{hashtagId}',
    handler: Handlers.getHashtag
  },
  {
    method: 'POST',
    path: '/hashtags',
    handler: Handlers.createHashtag,
    config: {
      validate: {
        payload: HashtagModelRequired
      }
    }
  },
  {
    method: 'PUT',
    path: '/hashtags/{hashtagId}',
    handler: Handlers.putHashtag,
    config: {
      validate: {
        payload: HashtagModelRequired
      }
    }
  },
  {
    method: 'PATCH',
    path: '/hashtags/{hashtagId}',
    handler: Handlers.patchHashtag,
    config: {
      validate: {
        payload: HashtagModel
      }
    }
  },
  {
    method: 'DELETE',
    path: '/hashtags/{hashtagId}',
    handler: Handlers.deleteHashtag
  }
];

export default routes;
