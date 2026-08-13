import { test, expect } from '@playwright/test';

test.describe('Users API', () => {
  test('returns a list of users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const users = await response.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty('email');
  });

  test('creates a user', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: {
        name: 'QA Portfolio User',
        email: 'qa@example.com'
      }
    });

    expect(response.status()).toBe(201);

    const user = await response.json();
    expect(user.name).toBe('QA Portfolio User');
    expect(user.email).toBe('qa@example.com');
  });
});
