import {combineReducers} from '@reduxjs/toolkit'
import template from './templates/templateSlice'
import keinginan from './keinginan/keinginanSlice'

export const rootReducers = combineReducers({
  template,
  keinginan,
})