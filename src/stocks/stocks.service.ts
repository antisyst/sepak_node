import { Injectable } from '@nestjs/common';
import { fetchStockData, fetchStockChartData } from '../../../client/src/services/StockService';
import { Stock, StockChartData } from '../../../client/src/types/StockTypes';

@Injectable()
export class StocksService {
  async getStockData(symbol: string): Promise<Stock> {
    return fetchStockData(symbol);
  }

  async getStockChartData(symbol: string): Promise<StockChartData[]> {
    return fetchStockChartData(symbol);
  }
}
