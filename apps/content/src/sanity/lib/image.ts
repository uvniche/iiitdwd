import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

// https://www.sanity.io/docs/image-url
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
