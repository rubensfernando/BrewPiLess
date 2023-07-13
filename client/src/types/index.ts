export type WiFi = {
  con: 1;

  // the ip address of the gateway
  gw: string;

  // the ip address of the device
  ip: string;

  // wifi mode
  // 1 = station
  // 2 = access point
  // 3 = station + access point
  md: 1 | 2 | 3;

  // ip address of the subnet mask
  nm: string;

  // name WiFi network
  ssid: string;
};

export type Cap = { m: 0; c: 0 };

export type Ptc = {
  enabled: false;
  temp: 0;
  stemp: 4;
  mincool: 300;
  minidle: 300;
};

export type RelativeHumidity = { m: 0; t: 255 };

export type InitialData = {
  cap: Cap;
  // name of log
  nameLog: string;

  // name of device
  nameDevice: string;

  // Glycol mode
  ptc: Ptc;

  // relative humidity
  rh: RelativeHumidity;

  // signal strength wi-fi
  wifiSignalStrength: number;

  // timestamp
  timestamp: Date;

  // timezone offset
  timezoneOffset: number;

  // version
  version: string;
};

export type BeerProfile = {};

export type GravityStatus = {
  // last update
  lastUpdate: Date;

  // temperature
  temperature?: number | null;

  // wifi signal strength
  wifiSignalStrength?: number;

  // gravity in SG
  gravity: number;
};

export type PressureStatus = {
  psi: number;

  pm: number;
};

export type BeerStatus = {
  pressure?: PressureStatus;

  // wifi signal strength
  wifiSignalStrength: number;

  // control state
  // st
  controlState: string;

  // mode
  // md
  mode: string;

  //
  temperateUnit: 'C' | 'F';

  temperatures: {
    beerTemp: number;
    beerSet: number;
    fridgeTemp: number;
    fridgeSet: number;
    roomTemp: number;
  };
  gravity?: GravityStatus;
  statusLine: string;
  controlStateSince: string;
};
