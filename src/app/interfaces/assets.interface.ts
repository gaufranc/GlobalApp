export interface Asset{
    id: string,
    asset_name: string,
    can_deposit: boolean,
    can_withdrawal: boolean,
    current_rate?: number,
    img: string
}