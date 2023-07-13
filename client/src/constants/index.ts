type Mode = {
  [key: string]: string;
};

export const ModeStatus: Mode = {
  o: 'mode_off',
  b: 'mode_beer_const',
  f: 'mode_fridge_const',
  p: 'mode_beer_profile',
  i: 'Invalid',
};

export const StateText = [
  'state_text_idle',
  'state_text_off',
  'state_text_door_Open',
  'state_text_heating',
  'state_text_cooling',
  'state_text_wait_to_cool',
  'state_text_wait_to_heat',
  'state_text_wait_for_peak',
  'state_text_cooling_min_time',
  'state_text_heating_min_time',
  'state_text_invalid',
];
