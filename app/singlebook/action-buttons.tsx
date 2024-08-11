import React from 'react';
import { Button } from '@mantine/core';

const ActionButtons: React.FC = () => {
    return (
        <div className="flex space-x-4 mt-4">
            <Button color="green" radius="md" size="md">
                Buy now
            </Button>
            <Button color="gray" radius="md" size="md" variant="outline">
                Add to cart
            </Button>
        </div>
    );
};

export default ActionButtons;
