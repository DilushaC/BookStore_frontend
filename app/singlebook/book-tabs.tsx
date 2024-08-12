import React from 'react';
import { Tabs } from '@mantine/core';

const BookTabs: React.FC = () => {
    return (
        <Tabs defaultValue="description" className="mt-6">
            <Tabs.List>
                <Tabs.Tab value="description">Description</Tabs.Tab>
                <Tabs.Tab value="additionalInfo">Additional Info</Tabs.Tab>
                <Tabs.Tab value="reviews">Reviews</Tabs.Tab>
                <Tabs.Tab value="video">Video</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="description" pt="xs">
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam amet augue...
                </p>
            </Tabs.Panel>
            <Tabs.Panel value="additionalInfo" pt="xs">
            <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam amet augue...
                </p>
            </Tabs.Panel>
            <Tabs.Panel value="reviews" pt="xs">
            <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam amet augue...
                </p>
            </Tabs.Panel>
            <Tabs.Panel value="video" pt="xs">
            <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius nisl sed sit aliquet nullam pretium. Velit vel aliquam amet augue...
                </p>
            </Tabs.Panel>
        </Tabs>
    );
};

export default BookTabs;
