import { EntityState } from '@reduxjs/toolkit';
import {
	Article,
	ArticleType,
	ArticleView,
	ArticleSortField,
} from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;

	// pagination
	page: number;
	limit: number;
	hasMore: boolean;
	// filters
	view: ArticleView;
	order: 'asc' | 'desc';
	sort: ArticleSortField;
	search: string;
	type: ArticleType;

	_inited: boolean;
}
