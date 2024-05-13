export async function fetchCategory(): Promise<object[]> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/category`);

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const json = await response.json();
        const user = json.categories;
        return user;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
