/** Services */
import { useServerURL } from "@/services/config"

export const fetchBlocks = async ({ limit, offset }) => {
	try {
		const url = new URL(`${useServerURL()}/block`)

		url.searchParams.append("stats", true)
		url.searchParams.append("sort", "desc")

		if (limit) url.searchParams.append("limit", limit)
		if (offset) url.searchParams.append("offset", offset)

		const data = await useFetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchBlockByHeight = async (height) => {
	try {
		const data = await useFetch(`${useServerURL()}/block/${height}?stats=true`)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchBlockNamespaces = async ({ height, limit, offset, sort }) => {
	try {
		const url = new URL(`${useServerURL()}/block/${height}/namespace`)

		if (limit) url.searchParams.append("limit", limit)
		if (offset) url.searchParams.append("offset", offset)
		if (sort) url.searchParams.append("sort", sort)

		const data = await $fetch(url.href)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const fetchBlockNamespacesCount = async (height) => {
	try {
		const data = await useLazyFetch(`${useServerURL()}/block/${height}/namespace/count`)
		if (data.status.value === "idle") await data.execute()
		return data
	} catch (error) {
		console.error(error)
	}
}
