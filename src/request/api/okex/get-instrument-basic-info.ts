import Axios from '../../config';
import {
  GetInstrumentBasicInfoProps,
  InstrumentBasicInfo,
} from './get-instrument-basic-info.type';

export const getInstrumentBasicInfo = async (
  getInstrumentBasicInfoProps: GetInstrumentBasicInfoProps,
): Promise<InstrumentBasicInfo[]> => {
  const axiosResponse = await Axios.get('/api/v5/public/instruments', {
    params: getInstrumentBasicInfoProps,
  });

  return axiosResponse.data.data;
};
