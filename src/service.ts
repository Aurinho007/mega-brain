import { ASYNC_STORAGE_KEY } from './constants';
import { Category } from './types';

class Service {
	static getAllItens = (): Category[] => {
		const data = localStorage.getItem(ASYNC_STORAGE_KEY);
		return data ? JSON.parse(data) : [];
	};

	static createItem = (item: Category): boolean => {
		const categories = this.getAllItens();
		const index = categories.findIndex((i) => i.name.toLowerCase() === item.name.toLowerCase());

		if (index !== -1) {
			return false;
		}
		categories.push(item);
		this._setAllItens(categories);

		return true;
	};

	static editItem = (item: Category): boolean => {
		const categories = this.getAllItens();
		const index = categories.findIndex((i) => i.id === item.id);

		if (index === -1) {
			return false;
		}

		categories[index] = item;
		this._setAllItens(categories);
		return true;
	};

	static deleteItem = (id: number): boolean => {
		const categories = this.getAllItens();
		const index = categories.findIndex((i) => i.id === id);

		if (index === -1) {
			return false;
		}

		categories.splice(index, 1);
		this._setAllItens(categories);
		return true;
	};

	static _setAllItens = (categories: Category[]) => {
		localStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(categories));
	};
}

export default Service;
