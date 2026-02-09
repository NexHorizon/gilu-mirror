import { CategoriesQuery } from '@/queries/query';
import { getClient } from '@/utlis/ApolloClient';

export async function GET(req) {
  const { data } = await getClient().query({
    query: CategoriesQuery
  });

  return Response.json(data);
}
