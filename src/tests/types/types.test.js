import { types } from '../../types/types';

describe('Pruebas en Types', () => {
  test('Los types deben de ser iguales', () => {
    expect(types).toEqual({
      uiOpenModal: '[ui] Open Modal',
      uiCloseModal: '[ui] Close Modal',

      eventSetActive: '[event] Set Active',
      eventStartAddNew: '[event] Start add new',
      eventAddNew: '[event} Add new',
      eventClearActiveEvent: '[event] Clear Active Event',
      eventUpdated: '[event] Event updated',
      eventDeleted: '[event] Event deleted',
      eventLoaded: '[event] Events Loaded',
      eventLogout: '[event] Logout event',

      authChekingFinished: '[auth] Finish cheking login state',
      authStartLogin: '[auth] Start Login',
      authLogin: '[auth] Login',
      authStartRegister: '[auth] Start register',
      authStartTokenRenew: '[auth] Start token renew',
      authLogout: '[auth] Logout',
    });
  });
});
