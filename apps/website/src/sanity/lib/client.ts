import { createClient, type QueryParams } from '@sanity/client';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
});

export const get = async <T>(
  query: string,
  params?: QueryParams
): Promise<T> => {
  try {
    const res = await client.fetch<T>(query, {
      ...params
    });
    return res;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};
