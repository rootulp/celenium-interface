/** Services */
import { useServerURL } from "@/services/config"

export const fetchAddresses = async ({ limit, offset, sort }) => {
	try {
		const url = new URL(`${useServerURL()}/address`)

		if (limit) url.searchParams.append("limit", limit)
		if (offset) url.searchParams.append("offset", offset)
		if (sort) url.searchParams.append("sort", sort)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchAddressesCount = async () => {
	try {
		const url = new URL(`${useServerURL()}/address/count`)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchAddressByHash = async (hash) => {
	try {
		const url = new URL(`${useServerURL()}/address/${hash}`)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchTxsByAddressHash = async ({ limit, offset, sort, hash }) => {
	try {
		const url = new URL(`${useServerURL()}/address/${hash}/txs`)

		if (limit) url.searchParams.append("limit", limit)
		if (offset) url.searchParams.append("offset", offset)
		if (sort) url.searchParams.append("sort", sort)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}
