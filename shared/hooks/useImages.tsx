import { faker } from "@faker-js/faker";
import { useQuery } from "@tanstack/react-query";

const MOCK_DATA = faker.helpers.multiple(() => ({
  id: faker.string.uuid(),
  userName: faker.internet.userName({ firstName: 'Retro', lastName: 'Valtex'}),
  stockPhotos: faker.image.urlPicsumPhotos({ width: 160, height: 160}),
}), { count: 20 })

export const useImages = () => {
  return useQuery({
    queryKey: ['images'],
    queryFn: () => MOCK_DATA
  });
}
