import { Item, ItemCategory } from '@/types/delivery';
import { MOCK_ITEMS } from '@/lib/mock-data';

export async function getItems(): Promise<Item[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_ITEMS;
}

export async function getItemsByCategory(category: ItemCategory): Promise<Item[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_ITEMS.filter(item => item.category === category);
}

export async function getItemById(id: string): Promise<Item | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return MOCK_ITEMS.find(item => item.id === id) || null;
}

export async function searchItems(query: string): Promise<Item[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const lowerQuery = query.toLowerCase();
  return MOCK_ITEMS.filter(
    item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.store.toLowerCase().includes(lowerQuery)
  );
}
