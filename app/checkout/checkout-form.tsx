import React from 'react';
import { TextInput, Select, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

const CheckoutForm: React.FC = () => {
    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            country: '',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
        },
    });

    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className='text-3xl font-bold ml-12 px-12'><span className='ml-2'>Pay Now</span></h1>
            <div className="flex justify-center">
                <div className='w-8/12 p-8'>
                    <h2 className="text-2xl font-semibold mb-4">Billing details</h2>
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <div className="grid grid-cols-2 gap-4">
                            <TextInput
                                label="First Name"
                                placeholder="First Name"
                                {...form.getInputProps('firstName')}
                            />
                            <TextInput
                                label="Last Name"
                                placeholder="Last Name"
                                {...form.getInputProps('lastName')}
                            />
                            <TextInput
                                label="Email Address"
                                placeholder="Email Address"
                                {...form.getInputProps('email')}
                            />
                            <TextInput
                                label="Mobile Number"
                                placeholder="+94 0 0000 0000"
                                {...form.getInputProps('mobile')}
                            />
                            <Select
                                label="Country"
                                placeholder="Select your country"
                                data={[{ value: 'Sri Lanka', label: 'Sri Lanka' }]}
                                {...form.getInputProps('country')}
                            />
                        </div>

                        <h2 className="text-2xl font-semibold mt-6">Payment method</h2>
                        <div className="mt-4">
                            <TextInput
                                label="Card Number"
                                placeholder="1234 5678 9101 1121"
                                {...form.getInputProps('cardNumber')}
                            />
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <TextInput
                                    label="Expiration Date"
                                    placeholder="MM/YY"
                                    {...form.getInputProps('expirationDate')}
                                />
                                <TextInput
                                    label="CVV"
                                    placeholder="123"
                                    {...form.getInputProps('cvv')}
                                />
                            </div>
                        </div>

                        <Group position="center" mt="lg">
                            <Button type="submit" color="green" size="lg">
                                Pay $59.28
                            </Button>
                        </Group>
                    </form>
                </div>
                <div className="w-3/12 bg-gray-100 p-4 px-8 rounded mt-6">
                    <h2 className="text-xl font-semibold mb-5">Order Summary</h2>
                    <ul className="mb-4">
                        <li className="flex justify-between">
                            <span>All The Light We Cannot See</span>
                            <span>$24.99</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Where The Crawdads Sing</span>
                            <span>$34.99</span>
                        </li>
                    </ul>
                    <div className="flex justify-between font-semibold">
                        <span>Totals:</span>
                        <span>$59.98</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
