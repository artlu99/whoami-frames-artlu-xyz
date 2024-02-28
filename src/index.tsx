import { Button, Frog } from 'frog'

export const app = new Frog({
  // Supply a Hub API URL to enable frame verification.
  // hubApiUrl: 'https://hub.pinata.cloud',
})

app.frame('/', (c) => {
  const { status, frameData, verified } = c
  const fid = frameData?.fid

  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            ? `You are fid ${fid}. I did not make a round-trip to a Hub to verify you`
            : 'I (will) know who you are'}
        </div>
      </div>
    ),
    intents: [
      status === 'response' ? null : <Button value="letmein">Let Me In</Button>,
    ],
  })
})

export default app
