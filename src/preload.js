const { contextBridge } = require('electron')
const { writeFile } = require('fs/promises')
const { readFileSync } = require('fs')
const path = require('path')
const { uIOhook, UiohookKey } = require('uiohook-napi')
const robot = require('@jitsi/robotjs')
contextBridge.exposeInMainWorld('api', {
    writeFile,
    readFileSync,
    path,
    __dirname,
    on: (event, listener) => uIOhook.on(event, listener),
    start: () => uIOhook.start(),
    stop: () => uIOhook.stop(),
    UiohookKey,
    robot,
})