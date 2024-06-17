import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

export const fetchArticleRecommendations = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>(
	'articlesDetailsPage/fetchArticleRecommendations',
	async (props, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<Article[]>('/articles', {
				params: {
					_limit: 4,
				},
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	},
);
