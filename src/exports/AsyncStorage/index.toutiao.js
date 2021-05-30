
const AsyncStorage = {}

/**
 * 获取storage数据
 * @param {string} key key值
 */
AsyncStorage.getItemSync = (key) => {
    return tt?.getStorageSync?.(key)
}
/**
 * 向storage写入数据
 * @param {string} key key值
 * @param {string} value 具体值
 */
AsyncStorage.setItemSync = (key, value) => {
    return tt?.setStorageSync?.(key, value)
}
/**
 * 
 * @param {string} key 
 */
AsyncStorage.removeItemSync = (key) => {
    return tt?.removeStorageSync?.(key)
}
AsyncStorage.getAllKeysSync = () => {
    return tt?.getStorageInfoSync?.()?.keys
}

/**
 * 获取storage数据
 * @param {string} key key值
 */
AsyncStorage.getItem = (key, callback = () => {}) => {
    return new Promise((resolve, reject) => {
        tt?.getStorage?.({
            key,
            success (res) {
                callback(null, res.data)
                resolve(res.data)
            },
            fail () {
                callback(null)
                resolve(null)
            }
        })
    })
}
/**
 * 向storage写入数据
 * @param {string} key key值
 * @param {string} value 具体值
 */
AsyncStorage.setItem = (key, data) => {
    return new Promise((resolve, reject) => {
        tt?.setStorage?.({
            key,
            data
        })
        resolve()
    })
}
/**
 * 
 * @param {string} key 
 */
AsyncStorage.removeItem = (key, callback = () => {}) => {
    return new Promise((resolve, reject) => {
        tt?.removeStorage?.({
            key,
            success (res) {
                callback(null, res)
                resolve(res)
            }
        })
    })
}
AsyncStorage.getAllKeys = (callback = () => {}) => {
    return new Promise((resolve, reject) => {
        tt?.getStorageInfo?.({
            success (res) {
                callback(null, res.keys)
                resolve(res.keys)
            },
            fail () {
                callback([])
                reject([])
            }
        })
    })
}

export default AsyncStorage;