import { ASYNC_STORAGE_KEY } from './constants';
import { ICard } from './types';

class Service {
	static getAllItens = (): ICard[] => {
		const data = localStorage.getItem(ASYNC_STORAGE_KEY);
		return data ? JSON.parse(data) : [];
	};

	static editItem = (id: string, used: number): boolean => {
		const categories = this.getAllItens();
		const index = categories.findIndex((item) => item.id === id);

		if (index === -1) {
			return false;
		}

		categories[index].used += used;
		this._setAllItens(categories);

		return true;
	};

	static createItem = (item: ICard): boolean => {
		const categories = this.getAllItens();
		const index = categories.findIndex((i) => i.name === item.name);

		if (index !== -1) {
			return false;
		}

		categories.push(item);
		this._setAllItens(categories);

		return true;
	};

	static deleteItem = (id: string): boolean => {
		const categories = this.getAllItens();
		const index = categories.findIndex((i) => i.id === id);

		if (index === -1) {
			return false;
		}

		categories.splice(index, 1);
		this._setAllItens(categories);
		return true;
	};

	static getAllCategories = (): string[] => {
		const allItens = this.getAllItens();

		const categories = allItens.map((item) => item.name);

		return categories;
	};

	static _setAllItens = (categories: ICard[]) => {
		localStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(categories));
	};
}

export default Service;
