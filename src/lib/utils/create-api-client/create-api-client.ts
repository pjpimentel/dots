import axios from 'axios';
import { getAccount } from '../../modules/account';
import { listRegions } from '../../modules/region';
import { listSizes } from '../../modules/size';
import { createContext } from '../create-context/create-context';

interface ICreateApiClientInput {
  endpoint?: string;
  requestTimeoutInMs?: number;
  token: string;
}

export const createApiClient = ({
  requestTimeoutInMs,
  endpoint,
  token,
}: ICreateApiClientInput) => {
  const {freeze} = Object;
  const context = createContext({
    axios,
    endpoint,
    requestTimeoutInMs,
    token,
  });
  const account = freeze({
    getAccount: getAccount(context),
  });
  const region = freeze({
    listRegions: listRegions(context),
  });
  const size = freeze({
    listSizes: listSizes(context),
  });

  return freeze({
    account,
    region,
    size,
  });
};
