export interface GothicLineData {
  text: {[lang: string]: string},
  notes?: string
}

export interface ClientLineData extends GothicLineData {
  id: number,
}