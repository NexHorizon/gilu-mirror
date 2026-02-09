import { CreateNewsletterContactMutation } from '@/queries/query';
import { getClient } from '@/utlis/ApolloClient';

export async function POST(req) {
  const body = await req.json()
  const { data } = await getClient().mutate({
    mutation: CreateNewsletterContactMutation,
    variables: { data: body }
  });
  return Response.json(data);
}
