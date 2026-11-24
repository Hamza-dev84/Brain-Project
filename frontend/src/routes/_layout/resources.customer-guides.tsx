import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/resources/customer-guides')({
  component: () => <Outlet />,
})

