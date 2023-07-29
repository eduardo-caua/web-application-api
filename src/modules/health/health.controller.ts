import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheckService, SequelizeHealthIndicator, HealthCheck } from '@nestjs/terminus';

@ApiTags('Health')
@Controller({ path: 'health', version: [''] })
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private db: SequelizeHealthIndicator,
    ) {}
        
    @Get()
    @HealthCheck()
    @ApiOperation({ summary: 'Health Check' })
    @ApiResponse({ status: 200, description: 'Successfully requested.' })
    check() {
        return this.health.check([async () => this.db.pingCheck('sequelize')]);
    }
}
    