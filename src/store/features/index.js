import {combineReducers} from '@reduxjs/toolkit'
import template from './templates/templateSlice'
import keinginan from './keinginan/keinginanSlice'
import modal from './modal/modalSlice'

export const rootReducers = combineReducers({
  template,
  keinginan,
  modal
})