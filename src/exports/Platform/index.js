/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const Platform = {
  OS: 'wx',
  select: (obj: Object) => ('wx' in obj ? obj.wx : obj.default),
  get isTesting(): boolean {
    if (process.env.NODE_DEV === 'test') {
      return true;
    }
    return false;
  }
};

export default Platform;
