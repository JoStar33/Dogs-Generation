import { http } from 'msw';

export const handlers = [
  // Match a GET request to a third-party server.
  http.get('https://jsonplaceholder.typicode.com/todos', () => {
    return new Response(JSON.stringify({ id: 'abc-123' }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
