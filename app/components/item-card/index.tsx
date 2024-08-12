import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { IconEye, IconHeart, IconShoppingCart } from '@tabler/icons-react';

interface ItemCardProps {
    title: string;
    author: string;
    price: string;
    image: string;
    rating: number;
    flexList?: boolean;
}

const ItemCard: React.FC<ItemCardProps> = ({ title, author, price, image, rating, flexList }) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="relative">
            <Card.Section>
                <Image src={image} alt={title} height={160} className={flexList ? 'object-fill h-21 w-15' : 'object-contain h-70 w-96'} />
            </Card.Section>

            <Group className="mt-2">
                <Text>{title}</Text>
                <Badge color="green">${price}</Badge>
            </Group>

            <Text size="sm" color="dimmed">
                By {author}
            </Text>

            <Group className="mt-3">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={index < rating ? 'text-yellow-500' : 'text-gray-300'}
                    >
                        ★
                    </span>
                ))}
            </Group>

            <Group className="absolute top-2 right-2">
                <Button variant="light" color="gray" size="xs">
                    <IconEye size={16} />
                </Button>
                <Button variant="light" color="gray" size="xs">
                    <IconHeart size={16} />
                </Button>
                <Button variant="light" color="gray" size="xs">
                    <IconShoppingCart size={16} />
                </Button>
            </Group>
        </Card>
    );
};

export default ItemCard;
