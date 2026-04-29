// components/ui/SimpleMarkdown.tsx

function renderInline(str: string): string {
  return str.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

export default function SimpleMarkdown({ text }: { text: string }) {
  const lines = text.split('\n')
  const blocks: React.ReactNode[] = []
  let bulletBuffer: string[] = []
  let key = 0

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return
    blocks.push(
      <ul key={key++}>
        {bulletBuffer.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
        ))}
      </ul>
    )
    bulletBuffer = []
  }

  for (const line of lines) {
    if (line.startsWith('- ')) {
      bulletBuffer.push(line.slice(2))
    } else {
      flushBullets()
      if (line.trim() !== '') {
        blocks.push(<p key={key++} dangerouslySetInnerHTML={{ __html: renderInline(line) }} />)
      }
    }
  }
  flushBullets()

  return <>{blocks}</>
}
