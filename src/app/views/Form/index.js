import React from 'react'

import {
  DsAccordion,
  DsButton,
  DsGridElement,
  DsGridLayout,
  DsHeading,
  DsParagraph,
  DsIcon,
  DsInput
} from '@gabemule/design-system'

const Form = () => {
  const items = [
    {
      title: '1 - Informações do seguro',
      content: (
        <DsGridLayout gap="12px" horizontalAlign="center">
          <DsGridElement
            grid={{ row: '1', col: '1/7', mobileRow: '1', mobileCol: '1/4' }}
          >
            <DsInput
              animated={false}
              label="Selecione o tipo do Seguro"
              placeholder="Selecione..."
            ></DsInput>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '1', col: '7/13', mobileRow: '2', mobileCol: '1/7' }}
          >
            <DsInput
              animated={false}
              label="Selecione o segmento"
              placeholder="Selecione..."
            ></DsInput>
          </DsGridElement>
        </DsGridLayout>
      ),
      disabled: false
    },
    {
      title: '2 - Informações sobre o risco',
      content: (
        <DsGridLayout gap="12px">
          <DsGridElement
            grid={{ row: '1', col: '1/7', mobileRow: '1', mobileCol: '1/4' }}
          >
            <DsInput
              animated={false}
              label="Lista de equipamentos"
              placeholder="Selecione o equipamento desejado"
            ></DsInput>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '1', col: '7/13', mobileRow: '1', mobileCol: '4/7' }}
          >
            <DsInput
              animated={false}
              label="Valor em Risco"
              placeholder="Informe o valor máximo do equipamento"
            ></DsInput>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '2', col: '1/7', mobileRow: '2', mobileCol: '1/4' }}
          >
            <DsInput
              animated={false}
              label="Ano de fabricação"
              placeholder="Selecione o ano do equipamento"
            ></DsInput>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '2', col: '7/13', mobileRow: '2', mobileCol: '4/7' }}
          >
            <DsInput
              animated={false}
              label="Quantidade de equipamentos"
              placeholder="Selecione a quantidade desse equipamento"
            ></DsInput>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '3', col: '1/13', mobileRow: '3', mobileCol: '1/7' }}
          >
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <DsButton>Adicionar outro</DsButton>
            </div>
          </DsGridElement>
        </DsGridLayout>
      ),
      disabled: false
    },
    {
      title: '3 - Coberturas',
      content: (
        <DsGridLayout gap="12px" horizontalAlign="center">
          <DsGridElement
            grid={{ row: '1', col: '1/7', mobileRow: '1', mobileCol: '1/4' }}
          >
            <DsParagraph>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Danos de Causas Externas <DsIcon color="brand" image="help" />
              </div>
            </DsParagraph>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '1', col: '7/13', mobileRow: '2', mobileCol: '1/7' }}
          >
            <DsParagraph>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Roubo e Furto qualificado <DsIcon color="brand" image="help" />
              </div>
            </DsParagraph>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '2', col: '1/7', mobileRow: '1', mobileCol: '1/4' }}
          >
            <DsParagraph>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Alagamento <DsIcon color="brand" image="help" />
              </div>
            </DsParagraph>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '2', col: '7/13', mobileRow: '2', mobileCol: '1/7' }}
          >
            <DsParagraph>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Danos Elétricos <DsIcon color="brand" image="help" />
              </div>
            </DsParagraph>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '3', col: '1/7', mobileRow: '1', mobileCol: '1/4' }}
          >
            <DsParagraph>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Danos Causados por Líquidos{' '}
                <DsIcon color="brand" image="help" />
              </div>
            </DsParagraph>
          </DsGridElement>
          <DsGridElement
            grid={{ row: '3', col: '7/13', mobileRow: '2', mobileCol: '1/7' }}
          >
            <DsParagraph>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Locação de Equipamentos <DsIcon color="brand" image="help" />
              </div>
            </DsParagraph>
          </DsGridElement>
        </DsGridLayout>
      ),
      disabled: false
    }
  ]

  return (
    <div
      className={'form-container'}
      style={{ maxWidth: '1180px', margin: '0 auto' }}
    >
      <br />
      <DsHeading type="medium">Quotação Rápida</DsHeading>
      <br />
      <DsAccordion items={items}></DsAccordion>
      <br />
      <DsGridLayout gap="12px">
        <DsGridElement
          grid={{ row: '1', col: '1/7', mobileRow: '1', mobileCol: '1/4' }}
        >
          <DsButton type="primary"> Salvar </DsButton>
        </DsGridElement>
        <DsGridElement
          grid={{ row: '1', col: '7/13', mobileRow: '1', mobileCol: '4/7' }}
        >
          <DsButton type="secondary"> Cancelar </DsButton>
        </DsGridElement>
      </DsGridLayout>
    </div>
  )
}

export default Form
