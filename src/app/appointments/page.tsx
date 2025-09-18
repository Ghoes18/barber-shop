'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const SERVICES = [
  { id: 'corte', name: 'Corte de Cabelo', duration: 30, price: 15 },
  { id: 'barba', name: 'Barba', duration: 20, price: 12 },
  { id: 'corte-barba', name: 'Corte + Barba', duration: 45, price: 25 },
  { id: 'styling', name: 'Styling Completo', duration: 60, price: 35 }
]

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
]

export default function AppointmentsPage() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime || !customerData.name || !customerData.email) {
      alert('Por favor, preenche todos os campos obrigatórios.')
      return
    }
    
    // Demo booking confirmation
    alert('Agendamento confirmado! (demo)')
    
    // Reset form
    setSelectedService('')
    setSelectedDate('')
    setSelectedTime('')
    setCustomerData({ name: '', email: '', phone: '', notes: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Agendar Consulta</h1>
          <p className="text-muted-foreground">
            Escolhe o serviço, data e hora que preferes. Entraremos em contacto para confirmar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Escolhe o Serviço
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {SERVICES.map(service => (
                  <div
                    key={service.id}
                    className={`p-4 border rounded-xl cursor-pointer transition-colors ${
                      selectedService === service.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.duration} min</p>
                      </div>
                      <span className="font-bold">€{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Date & Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Data e Hora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Data</label>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Hora</label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm border rounded-lg transition-colors ${
                          selectedTime === time
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:bg-muted'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Os Teus Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome Completo *</label>
                  <Input
                    value={customerData.name}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="O teu nome"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    type="email"
                    value={customerData.email}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="email@exemplo.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefone</label>
                  <Input
                    value={customerData.phone}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+351 xxx xxx xxx"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Notas</label>
                  <Textarea
                    value={customerData.notes}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Algo específico que devemos saber?"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button onClick={handleBooking} className="w-full md:w-auto">
                  Confirmar Agendamento
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  * Campos obrigatórios. Entraremos em contacto para confirmar a disponibilidade.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
