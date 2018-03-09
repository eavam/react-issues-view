import { normalize, schema } from 'normalizr';

const items = new schema.Entity('items');

export function autocomliteSchema(data) {
  return normalize(data, {
    items: [items],
  });
}

export function issuesSchema(data) {
  return normalize(data, [items]);
}
